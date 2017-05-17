from flask import Blueprint, jsonify
from flask_login import login_required
from models import Application


api = Blueprint('api', __name__)


@api.route('/jobs/', methods=['GET'])
@login_required
def get_jobs():
    print(Application.query.all())
    return jsonify([])
