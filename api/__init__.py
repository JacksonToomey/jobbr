from flask import Blueprint, jsonify, request, g, abort
from flask_login import login_required
from models import Application, db
from serializers import ApplicationSerializer


api = Blueprint('api', __name__)


@api.errorhandler(404)
def handle_not_found(e):
    return jsonify({
        'error': 'Not found'
    }), 404


@api.route('/jobs/', methods=['GET'])
@login_required
def get_jobs():
    serializer = ApplicationSerializer(many=True)
    return jsonify(serializer.dump(Application.active().all()).data)


@api.route('/jobs/', methods=['POST'])
@login_required
def create_job():
    serializer = ApplicationSerializer()
    result = serializer.load(request.get_json())
    if result.errors:
        return jsonify({
            'errors': result.errors
        }), 422
    app = result.data
    app.user = g.user
    db.session.add(app)
    db.session.commit()
    return jsonify(serializer.dump(app).data)


@api.route('/jobs/<app_id>/', methods=['GET'])
def get_job(app_id):
    app = Application.active().filter_by(id=app_id).first()
    if app is None:
        return abort(404)
    serializer = ApplicationSerializer()
    return jsonify(serializer.dump(app).data)


@api.route('/jobs/<app_id>/', methods=['DELETE'])
def delete_job(app_id):
    app = Application.active().filter_by(id=app_id).first()
    if app is None:
        return abort(404)
    app.deleted = True
    db.session.add(app)
    db.session.commit()
    return jsonify({
        'deleted': True
    }), 202
