import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://{your supabase url}.supabase.co', '{your supabase key}', { auth: { persistSession: false } })

export default supabase
