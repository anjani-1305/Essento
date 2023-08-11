from django.urls import path
from .views import Registration, CollegeDetails

urlpatterns = [
    path('Register/', Registration, name='user_registration'),
    path('CollegeDetails/', CollegeDetails, name='user_college_details'),
]
