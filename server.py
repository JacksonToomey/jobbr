from flask import Flask, render_template, request, redirect
from flask_login import login_required
from flask_migrate import Migrate
from social_flask.routes import social_auth
from social_flask_sqlalchemy.models import init_social
from api import api
import models


def setup_app_routes(app):
    @app.before_request
    def force_ssl():
        if not app.config['SKIP_SSL'] and request.url.startswith('http://'):
            new = request.url.replace('http://', 'https://', 1)
            return redirect(new, code=301)

    @app.route('/login')
    def login():
        return render_template('login.html')

    @app.route('/')
    @app.route('/<path:path>')
    @login_required
    def index(path=None):
        return render_template('app.html')


def register_blueprints(app):
    app.register_blueprint(social_auth)
    app.register_blueprint(api, url_prefix='/api')


def init_libraries(app):
    models.db.init_app(app)
    Migrate(app, models.db)
    init_social(app, models.db.session)
    models.user.init_auth(app)


def create_app(config='config'):
    app = Flask(__name__)
    app.config.from_object(config)

    init_libraries(app)
    register_blueprints(app)
    setup_app_routes(app)

    return app
