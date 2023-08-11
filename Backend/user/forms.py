from django import forms
from .models import CollegeDetails, Registration

class CollegeDetailsForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # Get a list of registered students from the registrations model
        registered_students = Registration.objects.all()

        # Create a list of tuples for the student choices from the registered_students list
        student_choices = [(student.id, f"{student.first_name} {student.last_name}") for student in registered_students]

        # Update the choices for the "student" field
        self.fields['student'].choices = student_choices

    class Meta:
        model = CollegeDetails
        fields = '__all__'
