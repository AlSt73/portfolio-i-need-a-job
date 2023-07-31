import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ykrvbqyufggkpouwaogp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrcnZicXl1Zmdna3BvdXdhb2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MDU0ODMsImV4cCI6MjAwNDI4MTQ4M30.V4eJZyOY6qGWIDUakaRIqc5LE4dq94pH--BMDk_DE_I';

export const supabase = createClient(supabaseUrl, supabaseKey);


