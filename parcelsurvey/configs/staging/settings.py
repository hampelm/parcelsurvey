from parcelsurvey.configs.common.settings import *

DEBUG = False
TEMPLATE_DEBUG = DEBUG

# Database
DATABASE_HOST = 'db.beta.example.com'
DATABASE_PORT = '5433'
DATABASE_USER = 'parcelsurvey'
DATABASE_PASSWORD = 'tener'

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = 'http://d3-test-1.s3.amazonaws.com/'

# Predefined domain
MY_SITE_DOMAIN = 'parcelsurvey.beta.example.com'

# Email
EMAIL_HOST = 'mail.beta.example.com'
EMAIL_PORT = 25

# Caching
CACHE_BACKEND = 'memcached://127.0.0.1:11211/'

# S3
AWS_S3_URL = 's3://media.beta.example.com/parcelsurvey/'

# Trib IPs for security
INTERNAL_IPS = ()

# logging
import logging.config
LOG_FILENAME = os.path.join(os.path.dirname(__file__), 'logging.conf')
logging.config.fileConfig(LOG_FILENAME)