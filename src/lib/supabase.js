import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ikejwkbpvysvtpsxjgmy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZWp3a2JwdnlzdnRwc3hqZ215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzODM3ODAsImV4cCI6MjAxNzk1OTc4MH0.v0865_lCGXBd_M8hZamkPuP6DyS0b2wP9eOBCuc1ug0",
);