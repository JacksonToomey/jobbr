from models.db import ModelBase, db


class Keyword(ModelBase):
    __table_args__ = (
        db.UniqueConstraint('user_id', 'keyword', name='keyword_user_unique'),
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey('user.id', ondelete='CASCADE'),
        nullable=False,
    )
    keyword = db.Column(db.String(50), nullable=False, index=True)

    user = db.relationship(
        'User',
        backref=db.backref(
            'keywords',
            lazy='dynamic'
        ),
    )
