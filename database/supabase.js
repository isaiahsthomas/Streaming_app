import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://gtnrxfarioywbydizvxy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0bnJ4ZmFyaW95d2J5ZGl6dnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MDM5NDAsImV4cCI6MjAwODI3OTk0MH0.gARVV0aGBZy-ZVTiOwI4vVBxNQtQ0FWZhP5mvnfnRxs', { auth: { persistSession: false } })

export default supabase