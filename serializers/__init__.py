from flask_marshmallow import Marshmallow
from marshmallow import validates, ValidationError, fields
from models import Application,\
    ApplicationEvent

ma = Marshmallow()


class ApplicationEventSerializer(ma.ModelSchema):
    class Meta:
        model = ApplicationEvent


class ApplicationSerializer(ma.ModelSchema):
    class Meta:
        model = Application

    events = fields.Nested(ApplicationEventSerializer, many=True)

    @validates('company_name')
    def valid_company(self, company):
        if company.strip() == '':
            raise ValidationError('Company name cannot be empty')

    @validates('position')
    def valid_position(self, position):
        if position.strip() == '':
            raise ValidationError('Position cannot be empty')
