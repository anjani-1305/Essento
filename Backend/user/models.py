from django.db import models
from django.core.exceptions import ValidationError

class Registration(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    user_name = models.CharField(max_length=50)
    gender = models.CharField(max_length=100)
    email_id = models.EmailField(max_length=254)
    phone = models.IntegerField()
    country = models.CharField(max_length=50, default="INDIA")
    password = models.CharField(max_length=50, null=True, blank=True)
    confirm_password = models.CharField(max_length=50, null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.password and self.confirm_password and self.password != self.confirm_password:
            raise ValidationError("Passwords do not match.")
        super().save(*args, **kwargs)

    def __str__(self):
        return self.user_name

class CollegeDetails(models.Model):    
    college_name = models.CharField(max_length=100)
    college_mail_id = models.EmailField(max_length=100)
    branch = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    graduated_year = models.IntegerField()
    state = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    pincode = models.IntegerField()
    student = models.OneToOneField(
        Registration,
        on_delete=models.CASCADE,
        default=None
    )

    class Meta:
        verbose_name_plural = "College Details"

    def __str__(self):
        return f"{self.college_name} - {self.student}"
