-- Maison Diya — contact form submissions
-- Run this in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

create table if not exists public.contact_submissions (
  id         uuid        primary key default gen_random_uuid(),
  created_at timestamptz not null    default now(),
  name       text        not null,
  email      text        not null,
  occasion   text,        -- Diwali | Wedding | Corporate / bulk | Housewarming | Personal gift | Other
  quantity   text,        -- 1-10 | 11-25 | 25-100 | 100-1,000 | 1,000+
  message    text
);

-- Row Level Security: the site uses the public (anon/publishable) key in the
-- browser, so lock the table down. Allow anyone to INSERT an enquiry, but do
-- NOT expose a SELECT policy — that keeps submissions unreadable to the public.
-- You read them from the Supabase dashboard (or a server using the service key).
alter table public.contact_submissions enable row level security;

create policy "Anyone can submit a contact enquiry"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);
