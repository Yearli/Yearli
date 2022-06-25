const btn = document.getElementById('button');
const form = document.getElementById('form');
 form.addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Sending...';
   const serviceID = 'default_service';
   const templateID = 'template_3iy1kd5';
   console.log('Sending');
   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'Send Email';
     alert('Your Message Has Been Sent');
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });
});