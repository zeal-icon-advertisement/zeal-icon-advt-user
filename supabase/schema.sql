-- Phase 1: Photography for Zealicon Advertisement (public user site)
-- Admin portal (separate repo) inserts/updates rows and uploads images to Storage.
-- Run this in the Supabase SQL editor.

create table if not exists public.photographs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  category text not null check (
    category in (
      'Wedding Shoots',
      'Pre-Wedding Shoots',
      'Corporate Events Shoots',
      'Promotional Shoots',
      'Interior Shoot'
    )
  ),
  category_slug text not null check (
    category_slug in (
      'wedding-shoots',
      'pre-wedding-shoots',
      'corporate-events-shoots',
      'promotional-shoots',
      'interior-shoot'
    )
  ),
  photographer text,
  caption text,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists photographs_status_published_at_idx
  on public.photographs (status, published_at desc);

create index if not exists photographs_category_slug_idx
  on public.photographs (category_slug);

alter table public.photographs enable row level security;

drop policy if exists "Public can read published photographs" on public.photographs;
create policy "Public can read published photographs"
  on public.photographs
  for select
  to anon, authenticated
  using (status = 'published');

-- Storage: create a public bucket named "photography" in the Supabase dashboard.
-- Admin portal uploads images there and saves the public URL into image_url.
