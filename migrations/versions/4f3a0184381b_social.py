"""social

Revision ID: 4f3a0184381b
Revises: 108c0ad86dc3
Create Date: 2017-04-08 17:16:09.881276

"""
from alembic import op
import sqlalchemy as sa
from social_sqlalchemy.storage import JSONType

# revision identifiers, used by Alembic.
revision = '4f3a0184381b'
down_revision = '108c0ad86dc3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('social_auth_association',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('server_url', sa.String(length=255), nullable=True),
    sa.Column('handle', sa.String(length=255), nullable=True),
    sa.Column('secret', sa.String(length=255), nullable=True),
    sa.Column('issued', sa.Integer(), nullable=True),
    sa.Column('lifetime', sa.Integer(), nullable=True),
    sa.Column('assoc_type', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('server_url', 'handle')
    )
    op.create_table('social_auth_code',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=200), nullable=True),
    sa.Column('code', sa.String(length=32), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('code', 'email')
    )
    op.create_index(op.f('ix_social_auth_code_code'), 'social_auth_code', ['code'], unique=False)
    op.create_table('social_auth_nonce',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('server_url', sa.String(length=255), nullable=True),
    sa.Column('timestamp', sa.Integer(), nullable=True),
    sa.Column('salt', sa.String(length=40), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('server_url', 'timestamp', 'salt')
    )
    op.create_table('social_auth_partial',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('token', sa.String(length=32), nullable=True),
    sa.Column('data', JSONType(), nullable=True),
    sa.Column('next_step', sa.Integer(), nullable=True),
    sa.Column('backend', sa.String(length=32), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_social_auth_partial_token'), 'social_auth_partial', ['token'], unique=False)
    op.create_table('social_auth_usersocialauth',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('provider', sa.String(length=32), nullable=True),
    sa.Column('extra_data', JSONType(), nullable=True),
    sa.Column('uid', sa.String(length=255), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_social_auth_usersocialauth_user_id'), 'social_auth_usersocialauth', ['user_id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_social_auth_usersocialauth_user_id'), table_name='social_auth_usersocialauth')
    op.drop_table('social_auth_usersocialauth')
    op.drop_index(op.f('ix_social_auth_partial_token'), table_name='social_auth_partial')
    op.drop_table('social_auth_partial')
    op.drop_table('social_auth_nonce')
    op.drop_index(op.f('ix_social_auth_code_code'), table_name='social_auth_code')
    op.drop_table('social_auth_code')
    op.drop_table('social_auth_association')
    # ### end Alembic commands ###
