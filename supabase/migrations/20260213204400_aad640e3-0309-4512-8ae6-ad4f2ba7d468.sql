
-- Drop the overly permissive INSERT policy
DROP POLICY "Anyone can insert contact messages" ON public.contact_messages;

-- Create a more restrictive INSERT policy that validates required fields are not empty
CREATE POLICY "Public can insert contact messages with valid data"
  ON public.contact_messages
  FOR INSERT
  WITH CHECK (
    length(name) > 0 AND length(name) <= 200
    AND length(email) > 0 AND length(email) <= 500
    AND email ~ '^[^@]+@[^@]+\.[^@]+$'
    AND length(message) > 0 AND length(message) <= 10000
    AND (phone IS NULL OR length(phone) <= 50)
    AND (preferred_datetime IS NULL OR length(preferred_datetime) <= 200)
    AND (language IS NULL OR language IN ('hu', 'en', 'de'))
  );
