import datetime
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class ModelBase(db.Model):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    deleted = db.Column(db.Boolean, nullable=False, default=False)
    created = db.Column(
        db.DateTime,
        default=datetime.datetime.utcnow
    )
    updated = db.Column(
        db.DateTime,
        default=datetime.datetime.utcnow,
        onupdate=datetime.datetime.utcnow
    )
