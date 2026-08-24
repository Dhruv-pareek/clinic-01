/*
# Create appointments table for dental clinic

1. New Tables
- `appointments`
  - `id` (uuid, primary key)
  - `patient_name` (text, not null) — full name of the patient
  - `patient_email` (text, not null) — contact email
  - `patient_phone` (text, not null) — contact phone number
  - `treatment` (text, not null) — the treatment the patient wants
  - `appointment_date` (date, not null) — preferred date
  - `appointment_time` (text, not null) — preferred time slot
  - `message` (text, nullable) — optional notes from patient
  - `status` (text, not null, default 'pending') — pending / confirmed / cancelled
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `appointments`.
- Any visitor (anon + authenticated) can INSERT a new appointment — patients book without signing in.
- Only authenticated users (doctors/staff) can SELECT, UPDATE, and DELETE appointments — this is the doctor dashboard.
- Anon users CANNOT read or modify existing appointments, protecting patient privacy.

3. Important Notes
- This is a hybrid-access model: public booking (write) but private viewing (read).
- The login page is for doctors/staff to view and manage bookings.
- Patient data is never exposed to unauthenticated visitors.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  patient_email text NOT NULL,
  patient_phone text NOT NULL,
  treatment text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Allow anyone (patients) to book an appointment
DROP POLICY IF EXISTS "anyone_can_book_appointment" ON appointments;
CREATE POLICY "anyone_can_book_appointment" ON appointments
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated doctors/staff can view appointments
DROP POLICY IF EXISTS "staff_can_view_appointments" ON appointments;
CREATE POLICY "staff_can_view_appointments" ON appointments
  FOR SELECT TO authenticated
  USING (true);

-- Only authenticated doctors/staff can update appointment status
DROP POLICY IF EXISTS "staff_can_update_appointments" ON appointments;
CREATE POLICY "staff_can_update_appointments" ON appointments
  FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

-- Only authenticated doctors/staff can delete appointments
DROP POLICY IF EXISTS "staff_can_delete_appointments" ON appointments;
CREATE POLICY "staff_can_delete_appointments" ON appointments
  FOR DELETE TO authenticated
  USING (true);
