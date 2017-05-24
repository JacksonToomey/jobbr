from flask import Blueprint, jsonify, request, g
from flask_login import login_required
from models import Application, db
from serializers import ApplicationSerializer


api = Blueprint('api', __name__)


@api.route('/jobs/', methods=['GET'])
@login_required
def get_jobs():
    serializer = ApplicationSerializer(many=True)
    return jsonify(serializer.dump(Application.active().all()).data)


@api.route('/jobs/', methods=['POST'])
@login_required
def create_job():
    serializer = ApplicationSerializer()
    app = serializer.load(request.json).data
    app.user = g.user
    db.session.add(app)
    db.session.commit()
    return jsonify(serializer.dump(app).data)
