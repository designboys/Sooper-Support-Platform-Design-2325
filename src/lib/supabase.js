import { createClient } from '@supabase/supabase-js';

// Project credentials will be auto-injected during deployment
const SUPABASE_URL = 'https://project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;