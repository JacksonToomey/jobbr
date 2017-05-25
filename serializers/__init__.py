from flask_marshmallow import Marshmallow
from models import Application, db

ma = Marshmallow()


class ApplicationSerializer(ma.ModelSchema):
    class Meta:
        model = Application
