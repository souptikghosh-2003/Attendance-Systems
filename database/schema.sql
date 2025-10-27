-- MySQL schema for Timetable Creator & Attendance System
-- Tables created in dependency order so FOREIGN KEYS work

CREATE TABLE teacher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    available_times TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE classroom (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    capacity INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE course (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    teacher_id INT NOT NULL,
    classroom_id INT NOT NULL,
    frequency INT DEFAULT 1,
    CONSTRAINT fk_course_teacher FOREIGN KEY (teacher_id)
        REFERENCES teacher(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_course_classroom FOREIGN KEY (classroom_id)
        REFERENCES classroom(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE student_group (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    students TEXT       -- could be JSON or a join table for normalized design
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE timeslot (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slot VARCHAR(50) NOT NULL   -- e.g. '09:00-10:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE timetable_entry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    student_group_id INT NOT NULL,
    timeslot_id INT NOT NULL,
    day_of_week TINYINT NOT NULL, -- 0=Sunday .. 6=Saturday (or use ENUM)
    room_notes TEXT,
    CONSTRAINT fk_tt_course FOREIGN KEY (course_id)
        REFERENCES course(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_tt_group FOREIGN KEY (student_group_id)
        REFERENCES student_group(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_tt_timeslot FOREIGN KEY (timeslot_id)
        REFERENCES timeslot(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
