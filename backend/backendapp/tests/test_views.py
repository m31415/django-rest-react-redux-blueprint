from django.test import Client, TestCase
from django.contrib.auth.models import User


class AdminTest(TestCase):

    def setUp(self):
        self.client = Client()
        user = User.objects.create_superuser(
            username='test',
            password='test',
            email='test@gmail.com'
        )
        self.client.force_login(user)

    def test_admin_view(self):
        response = self.client.get('/admin/')
        self.assertEqual(response.status_code, 200)
