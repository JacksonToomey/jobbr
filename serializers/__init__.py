from flask_marshmallow import Marshmallow
from marshmallow import validates, ValidationError
from models import Application

ma = Marshmallow()


class ApplicationSerializer(ma.ModelSchema):
    class Meta:
        model = Application

    @validates('company_name')
    def valid_company(self, company):
        if company.strip() == '':
            raise ValidationError('Company name cannot be empty')

    @validates('position')
    def valid_position(self, position):
        if position.strip() == '':
            raise ValidationError('Position cannot be empty')
