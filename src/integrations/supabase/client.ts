import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gquasuggelohcutfruky.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdWFzdWdnZWxvaGN1dGZydWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNTYwMTksImV4cCI6MjA1MzYzMjAxOX0.eQuIBEyHrLBpKxcmYI1BedhMN1dJK4N569g-546e_O4";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);