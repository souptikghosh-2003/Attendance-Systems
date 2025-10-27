from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=100)
    available_times = models.TextField()

class Classroom(models.Model):
    name = models.CharField(max_length=50)
    capacity = models.IntegerField()

class Course(models.Model):
    name = models.CharField(max_length=100)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    frequency = models.IntegerField(default=1)

class StudentGroup(models.Model):
    name = models.CharField(max_length=100)
    students = models.TextField()

class TimeSlot(models.Model):
    slot = models.CharField(max_length=50)

class TimetableEntry(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    timeslot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)
    group = models.ForeignKey(StudentGroup, on_delete=models.CASCADE)

class Attendance(models.Model):
    timetable_entry = models.ForeignKey(TimetableEntry, on_delete=models.CASCADE)
    date = models.DateField()
    present_students = models.TextField()
