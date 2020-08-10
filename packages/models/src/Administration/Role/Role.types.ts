
enum RoleType {
  STUDENT = 'STUDENT',
  TRAINER = 'TRAINER',
  CREATOR = 'CREATOR',
  DEPARTMENT_MANAGER = 'DEPARTMENT_MANAGER',
  CLIENT_MANAGER = 'CLIENT_MANAGER',
  PARTNER_MANAGER = 'PARTNER_MANAGER',
  GLOBAL_VENDOR = 'GLOBAL_VENDOR',
  ADMIN = 'ADMIN'
}

enum PermissionType {
  COURSE_READ = 'COURSE_READ',
  COURSE_EDIT = 'COURSE_EDIT',
  COURSE_DELETE = 'COURSE_DELETE',
  COURSE_ENROLL = 'COURSE_ENROLL',
  COURSE_RESULTS = 'COURSE_RESULTS',
  PLAYLIST_READ = 'PLAYLIST_READ',
  LEARNING_PATH_READ = 'LEARNING_PATH_READ',
  LEARNING_PATH_ENROLL = 'LEARNING_PATH_ENROLL',
  LEARNING_PATH_EDIT = 'LEARNING_PATH_EDIT',
  LEARNING_PATH_DELETE = 'LEARNING_PATH_DELETE',
  RESOURCE_READ = 'RESOURCE_READ',
  RESOURCE_ENROLL = 'RESOURCE_ENROLL',
  RESOURCE_EDIT = 'RESOURCE_EDIT',
  RESOURCE_DELETE = 'RESOURCE_DELETE',
  QUIZ_READ = 'QUIZ_READ',
  QUIZ_TAKE = 'QUIZ_TAKE',
  QUIZ_EDIT = 'QUIZ_EDIT',
  QUIZ_DELETE = 'QUIZ_DELETE',
  QUIZ_RESULTS = 'QUIZ_RESULTS',
  TRAINING_TRACKER_READ = 'TRAINING_TRACKER_READ',
  TRAINING_TRACKER_EDIT = 'TRAINING_TRACKER_EDIT',
  TRAINING_TRACKER_DELETE = 'TRAINING_TRACKER_DELETE',
  ANALYTICS_READ = 'ANALYTICS_READ',
  ADMINISTRATION_READ = 'ADMINISTRATION_READ',
  ADMINISTRATION_EDIT = 'ADMINISTRATION_EDIT',
  ADMINISTRATION_DELETE = 'ADMINISTRATION_DELETE',
  DISCUSSION_READ = 'DISCUSSION_READ',
  TEMPLATE_READ = 'TEMPLATE_READ',
  TEMPLATE_EDIT = 'TEMPLATE_EDIT',
  TEMPLATE_DELETE = 'TEMPLATE_DELETE',
  STREAMING_READ = 'STREAMING_READ',
  STREAMING_EDIT = 'STREAMING_EDIT',
  STREAMING_DELETE = 'STREAMING_DELETE',
  STREAMING_MANAGE = 'STREAMING_MANAGE',
  STREAMING_ENROLL = 'STREAMING_ENROLL',
  COMMUNITY_READ = 'COMMUNITY_READ',
  TOPIC_READ = 'TOPIC_READ',
  ANNOUNCEMENT_READ = 'ANNOUNCEMENT_READ',
  MEMBER_READ = 'MEMBER_READ',
  ADVISER_READ = 'ADVISER_READ',
  COMMUNITY_DISCUSSION_READ = 'COMMUNITY_DISCUSSION_READ',
  ALBUM_READ = 'ALBUM_READ',
  COMMUNITY_PHOTO_READ = 'COMMUNITY_PHOTO_READ',
  COMMUNITY_EDIT = 'COMMUNITY_EDIT',
  TOPIC_EDIT = 'TOPIC_EDIT',
  ANNOUNCEMENT_EDIT = 'ANNOUNCEMENT_EDIT',
  MEMBER_EDIT = 'MEMBER_EDIT',
  ADVISER_EDIT = 'ADVISER_EDIT',
  COMMUNITY_DISCUSSION_EDIT = 'COMMUNITY_DISCUSSION_EDIT',
  ALBUM_EDIT = 'ALBUM_EDIT',
  COMMUNITY_PHOTO_EDIT = 'COMMUNITY_PHOTO_EDIT',
  COMMUNITY_DELETE = 'COMMUNITY_DELETE',
  TOPIC_DELETE = 'TOPIC_DELETE',
  ANNOUNCEMENT_DELETE = 'ANNOUNCEMENT_DELETE',
  MEMBER_DELETE = 'MEMBER_DELETE',
  ADVISER_DELETE = 'ADVISER_DELETE',
  COMMUNITY_DISCUSSION_DELETE = 'COMMUNITY_DISCUSSION_DELETE',
  ALBUM_DELETE = 'ALBUM_DELETE',
  COMMUNITY_PHOTO_DELETE = 'COMMUNITY_PHOTO_DELETE',
  ANALYTICS_STUDENT_READ = 'ANALYTICS_STUDENT_READ',
  COURSE_REVIEW_DELETE = 'COURSE_REVIEW_DELETE',
  RESOURCE_REVIEW_DELETE = 'RESOURCE_REVIEW_DELETE'
}

type RoleResponse = {
  description: string;
  entityStatus: string;
  id: number;
  name: string;
  permissions: Array<PermissionType>;
  type: string;
}

type RoleRequest = {
  description: string;
  entityStatus: string;
  name: string;
  permissions: Array<PermissionType>;
  type: string;
}

type RolePagedResponse = {
  description: string;
  id: number;
  name: string;
  status: string;
}

export {
  RoleType,
  PermissionType,
  RoleResponse,
  RoleRequest,
  RolePagedResponse
}

