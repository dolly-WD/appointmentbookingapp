document.getElementById('appointmentForm').addEventListener('submit',function(event)
{
    event.preventDefault();

    const username=document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);

    alert('Appointment booked successfully!');
    document.getElementById('appointmentForm').reset();
});

