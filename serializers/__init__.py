from flask_marshmallow import Marshmallow
from models import Application

ma = Marshmallow()


class ApplicationSerializer(ma.ModelSchema):
    class Meta:
        model = Application
