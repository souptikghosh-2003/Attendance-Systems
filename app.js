document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Timetable Creator & Automated Attendance System</h1>
        <div class="dashboard">
            <select id="roleSelect">
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="admin">Admin/HoD</option>
            </select>
            <div id="dashboardContent"></div>
        </div>
        <div class="timetable-setup">
            <h2>Easy Timetable Setup</h2>
            <form id="timetableForm">
                <input type="text" placeholder="Course Name" name="course" required />
                <input type="text" placeholder="Teacher" name="teacher" required />
                <input type="text" placeholder="Classroom" name="classroom" required />
                <input type="text" placeholder="Time Slot" name="timeslot" required />
                <input type="text" placeholder="Student Group" name="group" required />
                <button type="submit">Add Entry</button>
            </form>
            <div id="timetableList"></div>
        </div>
        <div class="attendance">
            <h2>Automated Attendance</h2>
            <div id="attendanceList"></div>
        </div>
    `;

    // Timetable entries
    const timetable = [];
    const attendance = [];

    document.getElementById('timetableForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = e.target;
        const entry = {
            course: form.course.value,
            teacher: form.teacher.value,
            classroom: form.classroom.value,
            timeslot: form.timeslot.value,
            group: form.group.value
        };
        timetable.push(entry);
        updateTimetableList();
        form.reset();
    });

    // Add entry animation for timetable and attendance
    function updateTimetableList() {
        const list = document.getElementById('timetableList');
        list.innerHTML = timetable.map((t, i) => `
            <div class="timetable-entry" style="animation: fadeIn 0.7s;">
                ${t.course} | ${t.teacher} | ${t.classroom} | ${t.timeslot} | ${t.group}
                <button onclick="removeTimetableEntry(${i})">Remove</button>
            </div>
        `).join('');
    }

    window.removeTimetableEntry = function(idx) {
        timetable.splice(idx, 1);
        updateTimetableList();
    };

    // Attendance simulation
    function updateAttendanceList() {
        const list = document.getElementById('attendanceList');
        list.innerHTML = timetable.map((t, i) => `
            <div class="attendance-entry" style="animation: fadeIn 0.7s;">
                ${t.course} | ${t.teacher} | ${t.classroom} | ${t.timeslot} | ${t.group}
                <span>Status: <strong>${attendance[i] ? 'Present' : 'Absent'}</strong></span>
                <button onclick="toggleAttendance(${i})">Toggle</button>
            </div>
        `).join('');
    }

    window.toggleAttendance = function(idx) {
        attendance[idx] = !attendance[idx];
        updateAttendanceList();
    };

    // Smart notifications for attendance
    function checkNotifications() {
        const notifications = [];
        timetable.forEach((t, i) => {
            if (!attendance[i]) {
                notifications.push(`Missed class: ${t.course} (${t.timeslot})`);
            }
        });
        if (notifications.length) {
            showNotifications(notifications);
        }
    }

    function showNotifications(msgs) {
        let notif = document.getElementById('notifications');
        if (!notif) {
            notif = document.createElement('div');
            notif.id = 'notifications';
            notif.style.background = '#ffeeba';
            notif.style.border = '1px solid #f5c06f';
            notif.style.padding = '10px';
            notif.style.margin = '16px 0';
            notif.style.borderRadius = '4px';
            app.prepend(notif);
        }
        notif.innerHTML = msgs.map(m => `<div>${m}</div>`).join('');
        setTimeout(() => notif.remove(), 5000);
    }

    // Call notification check after attendance toggle
    const originalToggleAttendance = window.toggleAttendance;
    window.toggleAttendance = function(idx) {
        originalToggleAttendance(idx);
        checkNotifications();
    };

    // Call notification check after timetable changes
    const originalRemoveTimetableEntry = window.removeTimetableEntry;
    window.removeTimetableEntry = function(idx) {
        originalRemoveTimetableEntry(idx);
        checkNotifications();
    };

    // Attendance analytics (mocked)
    function showAttendanceAnalytics() {
        const total = timetable.length;
        const present = attendance.filter(Boolean).length;
        const absent = total - present;
        let analytics = document.getElementById('analytics');
        if (!analytics) {
            analytics = document.createElement('div');
            analytics.id = 'analytics';
            analytics.style.background = '#e7f7e7';
            analytics.style.border = '1px solid #7ad67a';
            analytics.style.padding = '10px';
            analytics.style.margin = '16px 0';
            analytics.style.borderRadius = '4px';
            app.appendChild(analytics);
        }
        analytics.innerHTML = `<strong>Attendance Analytics:</strong><br>
            Total Classes: ${total}<br>
            Present: ${present}<br>
            Absent: ${absent}<br>
            Attendance Rate: ${total ? ((present/total)*100).toFixed(1) : 0}%`;
    }

    // Call analytics after attendance toggle
    const originalToggleAttendanceAnalytics = window.toggleAttendance;
    window.toggleAttendance = function(idx) {
        originalToggleAttendanceAnalytics(idx);
        checkNotifications();
        showAttendanceAnalytics();
    };

    // Initial render
    updateTimetableList();
    updateAttendanceList();
    checkNotifications();
    showAttendanceAnalytics();
});