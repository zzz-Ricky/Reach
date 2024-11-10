from rest_framework import serializers
from .models import TaskRequest

class TaskRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskRequest
        fields = '__all__'  # You can also list specific fields like ['user_name', 'task_description', ...]

class PostSerializer(serializers.ModelSerializer):
    # Assuming you have a TaskRequest model for the task request data
    class Meta:
        model = TaskRequest
        fields = ['user_name', 'people_needed', 'task_description', 'latitude', 'longitude', 'profile_image', 'task_image']

    # Additional validation can be added if needed
    def validate(self, data):
        # Example validation: Make sure the latitude and longitude are within acceptable ranges
        latitude = data.get('latitude')
        longitude = data.get('longitude')
        
        if latitude < -90 or latitude > 90:
            raise serializers.ValidationError("Latitude must be between -90 and 90 degrees.")
        if longitude < -180 or longitude > 180:
            raise serializers.ValidationError("Longitude must be between -180 and 180 degrees.")
        
        return data
