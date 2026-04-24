-- Snowflake bootstrap for Tai Chi backend v2
create schema if not exists app_core;
create schema if not exists app_ai;
create schema if not exists app_ops;
create schema if not exists app_analytics;

create table if not exists app_core.users (
  user_id string,
  email string,
  is_verified boolean,
  is_admin boolean,
  created_at timestamp_ntz,
  updated_at timestamp_ntz
);

create table if not exists app_core.credentials (
  user_id string,
  password_hash string,
  failed_login_attempts number,
  locked_until_epoch number,
  updated_at timestamp_ntz
);

create table if not exists app_core.profiles (
  user_id string,
  display_name string,
  locale string,
  experience_level string,
  updated_at timestamp_ntz
);

create table if not exists app_core.tokens (
  token_type string,
  token_hash string,
  user_id string,
  expires_at_epoch number,
  consumed boolean
);

create table if not exists app_core.sessions (
  session_id string,
  user_id string,
  csrf_token string,
  created_at_epoch number,
  expires_at_epoch number,
  user_agent string,
  ip_address string,
  revoked boolean
);

create table if not exists app_core.onboarding_answers (
  user_id string,
  answers variant,
  updated_at timestamp_ntz
);

create table if not exists app_core.calibrations (
  user_id string,
  calibration variant,
  updated_at timestamp_ntz
);

create table if not exists app_core.practice_sessions (
  practice_session_id string,
  user_id string,
  sequence_id string,
  started_at_epoch number,
  completed_at_epoch number,
  status string,
  summary_text string,
  summary_speech string
);

create table if not exists app_core.pose_attempts (
  attempt_id string,
  practice_session_id string,
  pose_index number,
  expected_pose_name string,
  detected_pose_name string,
  error_descriptions variant,
  confidence float,
  latency_ms number,
  created_at_epoch number
);

create table if not exists app_ops.audit_events (
  event_id string,
  user_id string,
  event_type string,
  details variant,
  created_at timestamp_ntz
);

create table if not exists app_ops.api_request_logs (
  request_id string,
  method string,
  path string,
  status_code number,
  duration_ms float,
  created_at timestamp_ntz
);

create table if not exists app_ai.ai_feedback (
  feedback_id string,
  user_id string,
  practice_session_id string,
  expected_pose_name string,
  actual_pose_name string,
  explanation string,
  created_at timestamp_ntz
);

create table if not exists app_ai.session_summaries (
  summary_id string,
  user_id string,
  practice_session_id string,
  summary_text string,
  created_at timestamp_ntz
);

create table if not exists app_ai.media_assets (
  asset_id string,
  user_id string,
  asset_type string,
  payload_ref string,
  created_at timestamp_ntz
);

create table if not exists app_analytics.daily_progress (
  snapshot_date date,
  total_sessions number,
  completed_sessions number
);

create or replace task app_analytics.daily_progress_rollup
  schedule = 'USING CRON 0 2 * * * UTC'
as
insert into app_analytics.daily_progress (snapshot_date, total_sessions, completed_sessions)
select current_date(), count(*), count_if(status = 'completed')
from app_core.practice_sessions;
