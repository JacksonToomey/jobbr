import datetime
from models.db import ModelBase, db


accomplishment_keyword = db.Table(
    'accomplishment_keyword',
    db.Column(
        'keyword_id',
        db.Integer,
        db.ForeignKey('keyword.id', ondelete='CASCADE'),
        nullable=False,
    ),
    db.Column(
        'accomplishment_id',
        db.Integer,
        db.ForeignKey('position_accomplishment.id', ondelete='CASCADE'),
        nullable=False,
    )
)


class ResumePosition(ModelBase):
    user_id = db.Column(
        db.Integer,
        db.ForeignKey('user.id', ondelete='CASCADE'),
        nullable=False,
    )
    company_name = db.Column(db.String(255), nullable=False, index=True)
    position_title = db.Column(db.String(255), nullable=False, index=True)
    position_start_date = db.Column(
        db.DateTime,
        nullable=False,
        default=datetime.datetime.utcnow,
    )
    position_end_date = db.Column(db.DateTime, nullable=True)
    position_start_title = db.Column(db.String(255), nullable=True, index=True)
    starting_salary = db.Column(db.Integer, nullable=True, index=True)
    salary = db.Column(db.Integer, nullable=True, index=True)
    salary_rate = db.Column(db.String(255), nullable=True)
    description = db.Column(db.Text, nullable=True)

    user = db.relationship(
        'User',
        backref=db.backref(
            'resume_positions',
            lazy='dynamic'
        ),
    )


class PositionAccomplishment(ModelBase):
    position_id = db.Column(
        db.Integer,
        db.ForeignKey('resume_position.id', ondelete='CASCADE'),
        nullable=False,
    )
    description = db.Column(db.Text, nullable=False)

    resume_position = db.relationship(
        'ResumePosition',
        backref=db.backref(
            'accomplishments',
            lazy='dynamic'
        )
    )

    keywords = db.relationship(
        'Keyword',
        secondary=accomplishment_keyword,
        backref=db.backref(
            'accomplishments',
            lazy='dynamic'
        ),
        lazy='dynamic'
    )
