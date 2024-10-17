# in models.py

from django.db import models

class ControllerShifts(models.Model):
    date = models.DateField()
    shift = models.CharField(max_length=10)
    day_controller1 = models.CharField(max_length=100, blank=True, null=True)
    day_controller2 = models.CharField(max_length=100, blank=True, null=True)
    night_controller1 = models.CharField(max_length=100, blank=True, null=True)
    night_controller2 = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.date} - {self.shift}"
