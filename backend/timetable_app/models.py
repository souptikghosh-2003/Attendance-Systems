# Django models placeholder

# Models for Timetable Creator & Attendance System
from django.db import models


class Teacher(models.Model):
    name = models.CharField(max_length=100)
    available_times = models.TextField()  # e.g. JSON or CSV


class Classroom(models.Model):
    name = models.CharField(max_length=50)
    capacity = models.IntegerField()


class Course(models.Model):
    name = models.CharField(max_length=100)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    frequency = models.IntegerField(default=1)  # classes per week


class StudentGroup(models.Model):
    name = models.CharField(max_length=100)
    students = models.TextField()  # e.g. CSV of student IDs


class TimeSlot(models.Model):
    slot = models.CharField(max_length=50)  # e.g. "Mon 9-10"


class TimetableEntry(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    timeslot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)
    group = models.ForeignKey(StudentGroup, on_delete=models.CASCADE)


class Attendance(models.Model):
    timetable_entry = models.ForeignKey(TimetableEntry, on_delete=models.CASCADE)
    date = models.DateField()
    present_students = models.TextField()  # CSV of present student IDs
