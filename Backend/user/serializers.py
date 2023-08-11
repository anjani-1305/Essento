from rest_framework import serializers
from .models import Registration, CollegeDetails

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model =  Registration
        fields = "__all__"

class CollegeSerializers(serializers.ModelSerializer):
    class Meta:
        model =  CollegeDetails
        fields = "__all__"
