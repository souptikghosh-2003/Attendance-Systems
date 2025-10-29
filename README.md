# 🏫 Timetable Creator & Automated Attendance System

> A smart, web-based platform that **automates timetable generation**, **manages attendance**, and provides **role-based dashboards** for students, faculty, and administrators — all accessible from web and mobile devices.

---

## 🚀 Project Overview

Schools and colleges often face challenges in creating conflict-free class timetables and maintaining accurate attendance records.  
This project aims to **automate both processes** through intelligent scheduling and real-time attendance tracking, minimizing human error and administrative effort.

---

## 🎯 Key Features

### 🧩 1. Easy Timetable Setup
- Admins and faculty can add **courses, teachers, classrooms, time slots, and student groups**.  
- The system automatically generates a **conflict-free timetable**, checking for:
  - Teacher availability  
  - Classroom capacity  
  - Subject frequency  
  - Non-overlapping sessions  
- Manual adjustments can be made anytime.

### 🌐 2. Web & Mobile Access
- Fully responsive platform accessible via any device.  
- Real-time updates sync automatically between web and mobile.

### 📋 3. Automated Attendance
- Attendance is auto-tracked as per the timetable and academic calendar.  
- Faculty can validate or edit attendance.  
- Students can view their own attendance records.

### 🧑‍💻 4. Role-Based Dashboards
| Role | Features |
|------|-----------|
| **Faculty** | Mark/edit attendance, view schedules, receive alerts |
| **HoD/Admin** | Analytics, attendance trends, defaulter reports, PDF summaries |
| **Students** | View attendance, timetable, and alerts for low attendance |

### 🔔 5. Smart Notifications
- Alerts for **low attendance**, **missed classes**, or **irregularities** are auto-sent to both students and faculty.

### 🏫 6. Dynamic Room Allocation
- If a classroom becomes unavailable, the system auto-assigns a new room and notifies all relevant users.

### 👩‍🏫 7. Faculty Substitution
- If a teacher is absent, the system suggests available substitutes and updates the timetable in real time.

---

## 🧠 System Architecture

Frontend (HTML/CSS/JS/AJAX)
│
▼
Backend (Python Django / Java Spring Boot)
│
▼
Database (MySQL)

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
|--------|-------------|-------------|
| **Frontend** | HTML, CSS, JavaScript, AJAX | Interactive web interface |
| **Backend** | Python (Django) / Java (Spring Boot) | Core logic and REST APIs |
| **Database** | MySQL | Stores timetables, attendance, and user info |
| **Version Control** | Git + GitHub | For collaboration and tracking |
| **IDE** | Visual Studio Code | Development environment |

---

## ⚙️ Installation & Setup Guide

### 🧩 Prerequisites
Make sure the following are installed:
- [Python 3.x](https://www.python.org/downloads/) or [Java 17+](https://www.oracle.com/java/technologies/downloads/)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [Visual Studio Code](https://code.visualstudio.com/)

---

### 🐍 If using **Python + Django**
#### 1. Clone the repository
```bash
git clone https://github.com/your-username/timetable-attendance-system.git
cd timetable-attendance-system
