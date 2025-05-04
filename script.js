  // 1️⃣ Initialize
  const SUPABASE_URL = 'https://ptbddahxcmszassmumeg.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0YmRkYWh4Y21zemFzc211bWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzMDEyMjcsImV4cCI6MjA2MTg3NzIyN30.dvpk0B6Ip5R_ZlZ1FDh4A7WBqXCguY1XVc9cORl6MgY';
  const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // 2️⃣ Grab elements
  const emailInput = document.getElementById('newsletterEmail');
  const submitBtn  = document.getElementById('newsletterSubmit');

  // 3️⃣ Listen and insert
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }

    // Insert into your Supabase table
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (error) {
      console.error(error);
      alert('Sorry, could not subscribe right now.');
    } else {
      alert('Thanks for subscribing!');
      emailInput.value = '';
    }
  });
