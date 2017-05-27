import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text


db = SQLAlchemy()


class ModelBase(db.Model):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    deleted = db.Column(
        db.Boolean,
        nullable=False,
        default=False,
        index=True,
        server_default=text('false')
    )
    created = db.Column(
        db.DateTime,
        index=True,
        default=datetime.datetime.utcnow,
        server_default=text('current_timestamp'),
    )
    updated = db.Column(
        db.DateTime,
        index=True,
        default=datetime.datetime.utcnow,
        onupdate=datetime.datetime.utcnow,
        server_default=text('current_timestamp'),
        server_onupdate=text('current_timestamp'),
    )

    @classmethod
    def active(cls):
        return cls.query.filter(cls.deleted.is_(False))
