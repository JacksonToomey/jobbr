from flask import Blueprint, jsonify
from flask_login import login_required
from models import Application
from serializers import ApplicationSerializer


api = Blueprint('api', __name__)


@api.route('/jobs/', methods=['GET'])
@login_required
def get_jobs():
    serializer = ApplicationSerializer(many=True)
    return jsonify(serializer.dump(Application.query.all()).data)
