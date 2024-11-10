# Reach_backend/serializer.py
from rest_framework import serializers
from resources.models import TaskRequest

class TaskRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskRequest
        fields = ['id', 'user_name', 'people_needed', 'task_description', 'latitude', 'longitude', 'profile_image', 'task_image', 'status', 'created_at']

    # You can add any custom validations or methods as needed
    def validate(self, data):
        # Ensure the task has valid fields and additional constraints can go here
        if data['people_needed'] <= 0:
            raise serializers.ValidationError("People needed must be greater than zero.")
        return data
