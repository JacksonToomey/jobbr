import datetime
from models.db import ModelBase, db


event_contacts = db.Table(
    'event_contacts',
    db.Column(
        'event_id',
        db.Integer,
        db.ForeignKey('application_event.id', ondelete='CASCADE'),
        nullable=False,
    ),
    db.Column(
        'contact_id',
        db.Integer,
        db.ForeignKey('application_contact.id', ondelete='CASCADE'),
        nullable=False,
    )
)

application_keyword = db.Table(
    'application_keyword',
    db.Column(
        'keyword_id',
        db.Integer,
        db.ForeignKey('keyword.id', ondelete='CASCADE'),
        nullable=False,
    ),
    db.Column(
        'application_id',
        db.Integer,
        db.ForeignKey('application.id', ondelete='CASCADE'),
        nullable=False,
    )
)


class Application(ModelBase):
    user_id = db.Column(
        db.Integer,
        db.ForeignKey('user.id', ondelete='CASCADE'),
        nullable=False,
    )
    company_name = db.Column(db.String(255), nullable=False, index=True)
    application_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    application_notes = db.Column(db.Text, nullable=True)
    position = db.Column(db.String(255), nullable=False, index=True)

    user = db.relationship(
        'User',
        backref=db.backref(
            'applications',
            lazy='dynamic'
        ),
    )

    events = db.relationship(
        'ApplicationEvent',
        backref='application',
        lazy='dynamic',
    )

    contacts = db.relationship(
        'ApplicationContact',
        backref='application',
        lazy='dynamic',
    )

    keywords = db.relationship(
        'Keyword',
        secondary=application_keyword,
        backref=db.backref(
            'applications',
            lazy='dynamic'
        ),
        lazy='dynamic'
    )


class ApplicationEvent(ModelBase):
    application_id = db.Column(
        db.Integer,
        db.ForeignKey('application.id', ondelete='CASCADE'),
        nullable=False,
    )
    event_time = db.Column(
        db.DateTime,
        nullable=False,
        default=datetime.datetime.utcnow
    )
    event_type = db.Column(db.String(255), nullable=False, index=True)
    event_description = db.Column(db.String(255), nullable=False, index=True)
    application_notes = db.Column(db.Text, nullable=True)

    contacts = db.relationship(
        'ApplicationContact',
        secondary=event_contacts,
        backref=db.backref('events', lazy='dynamic'),
        lazy='dynamic'
    )


class ApplicationContact(ModelBase):
    application_id = db.Column(
        db.Integer,
        db.ForeignKey('application.id', ondelete='CASCADE'),
        nullable=False,
    )
    first_name = db.Column(db.String(255), nullable=True)
    last_name = db.Column(db.String(255), nullable=True)
    email = db.Column(db.String(255), nullable=True)
    phone_number = db.Column(db.String(255), nullable=True)
    position = db.Column(db.String(255), nullable=True)
    contact_notes = db.Column(db.Text, nullable=True)
