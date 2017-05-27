from flask import g
from flask_login import current_user, LoginManager
from models.db import ModelBase, db


class User(ModelBase):
    username = db.Column(db.String(255), nullable=False, unique=True, index=True)
    email = db.Column(db.String(255), nullable=False, unique=True, index=True)

    @property
    def is_authenticated(self):
        return self.id is not None

    @property
    def is_active(self):
        return True

    @property
    def is_anonymous(self):
        return not self.is_authenticated

    def get_id(self):
        return str(self.id)


def init_auth(app):
    lm = LoginManager(app)
    lm.login_view = 'login'

    @lm.user_loader
    def load_user(user_id):
        return User.query.get(user_id)

    @app.before_request
    def global_user():
        g.user = current_user._get_current_object()

    @app.context_processor
    def inject_user():
        try:
            return {'user': g.user}
        except AttributeError:
            return {'user': None}
