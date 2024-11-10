# models.py
from django.db import models
from django.contrib.auth.models import User  # You can still use the built-in User model, or the CustomUser

# Existing models

class TaskRequest(models.Model):
    user_name = models.CharField(max_length=255)
    people_needed = models.IntegerField()
    task_description = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    task_image = models.ImageField(upload_to='task_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user_name

class CustomUser(models.Model):
    user_name = models.CharField(max_length=255)
    points = models.IntegerField(default=0)  # Total points earned
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)

    def __str__(self):
        return self.user_name

    def get_rank(self):
        if self.points < 50:
            return "Novice Helper"
        elif self.points < 150:
            return "Intermediate Helper"
        elif self.points < 300:
            return "Advanced Helper"
        else:
            return "Savior Helper"

class GlobalLeaderboard(models.Model):
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255, blank=True, null=True)
    total_points = models.IntegerField(default=0)
    average_rank = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.country} - {self.city if self.city else 'Global'}"

# Adding the AskForHelp model
class AskForHelp(models.Model):
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('closed', 'Closed'),
    ]
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='ask_for_help_requests')
    task_description = models.TextField()
    people_needed = models.IntegerField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    task_image = models.ImageField(upload_to='ask_for_help_images/', null=True, blank=True)

    def __str__(self):
        return f"Help request by {self.user.user_name} - {self.status}"

    def get_distance(self, user_latitude, user_longitude):
        """
        A simple method to calculate the distance (in km) between the user and the location of the ask.
        This is just an example, and you might want to use a library like `geopy` for more accurate calculations.
        """
        from math import radians, cos, sin, sqrt, atan2

        # Convert latitude and longitude from degrees to radians
        lat1 = radians(user_latitude)
        lon1 = radians(user_longitude)
        lat2 = radians(self.latitude)
        lon2 = radians(self.longitude)

        # Haversine formula
        dlon = lon2 - lon1
        dlat = lat2 - lat1
        a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))
        radius = 6371  # Radius of Earth in kilometers. Use 3956 for miles. Determines the unit of distance.

        # Calculate the result
        distance = radius * c
        return distance

    def is_within_radius(self, user_latitude, user_longitude, radius=5):
        """
        Determines if the task is within a certain radius (default: 5 km).
        """
        distance = self.get_distance(user_latitude, user_longitude)
        return distance <= radius
