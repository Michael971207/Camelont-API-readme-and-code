API CODE
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from blockchain import Blockchain
import jwt
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)
api = Api(app)
blockchain = Blockchain()

class Login(Resource):
    def post(self):
        # gather customer information from request
        customer_info = request.get_json()
        
        # add customer information to blockchain
        blockchain.add_block(customer_info)
        
        # generate JWT token for customer
        token = jwt.encode({'customer_id': customer_info['customer_id'], 'exp': 3600}, app.secret_key, algorithm='HS256')
        
        # return success message and JWT token
        return {'message': 'Login successful and information added to blockchain', 'token': token.decode('utf-8')}, 200

class CustomerData(Resource):
    def get(self, customer_id):
        # check for JWT token in header
        if 'Authorization' not in request.headers:
            return {'message': 'Authorization header missing'}, 401
        
        # decode JWT token and verify customer id
        token = request.headers['Authorization'].split()[1]
        try:
            data = jwt.decode(token, app.secret_key, algorithms='HS256')
            if data['customer_id'] != customer_id:
                return {'message': 'Unauthorized access'}, 401
        except:
            return {'message': 'Invalid token'}, 401
        
        # search the blockchain for customer information
        customer_data = blockchain.search_block(customer_id)
        
        # return customer information
        return {'customer_data': customer_data}, 200

api.add_resource(Login, '/login')
api.add_resource(CustomerData, '/customer/<int:customer_id>')

if __name__ == '__main__':
    app.run(debug=True)



# Fortsettelse av koden

from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from blockchain import Blockchain
import jwt
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)
api = Api(app)
blockchain = Blockchain()

class Login(Resource):
    def post(self):
        # gather customer information from request
        customer_info = request.get_json()

        # check if customer account already exists
        customer_data = blockchain.search_block(customer_info['customer_id'])
        if customer_data:
            return {'message': 'Account already exists, please log in'}, 400

        # add customer information to blockchain
        blockchain.add_block(customer_info)

        # generate JWT token for customer
        token = jwt.encode({'customer_id': customer_info['customer_id'], 'exp': 3600}, app.secret_key, algorithm='HS256')

        # return success message and JWT token
        return {'message': 'Account created and login successful', 'token': token.decode('utf-8')}, 200

class CustomerData(Resource):
    def get(self, customer_id):
        # check for JWT token in header
        if 'Authorization' not in request.headers:
            return {'message': 'Authorization header missing'}, 401

        # decode JWT token and verify customer id
        token = request.headers['Authorization'].split()[1]
        try:
            data = jwt.decode(token, app.secret_key, algorithms='HS256')
            if data['customer_id'] != customer_id:
                return {'message': 'Unauthorized access'}, 401
        except:
            return {'message': 'Invalid token'}, 401

        # search the blockchain for customer information
        customer_data = blockchain.search_block(customer_id)
        if not customer_data:
            return {'message': 'Account not found'}, 404

        # return customer information
        return {'customer_data': customer_data}, 200

api.add_resource(Login, '/login')
api.add_resource(CustomerData, '/customer/<int:customer_id>')

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from blockchain import Blockchain
import jwt
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)
api = Api(app)
blockchain = Blockchain()

class Login(Resource):
    def post(self):
        # gather customer information from request
        customer_info = request.get_json()

        # check if customer account already exists
        customer_data = blockchain.search_block(customer_info['customer_id'])
        if customer_data:
            return {'message': 'Account already exists, please log in'}, 400

        # add customer information to blockchain
        blockchain.add_block(customer_info)

        # generate JWT token for customer
        token = jwt.encode({'customer_id': customer_info['customer_id'], 'exp': 3600}, app.secret_key, algorithm='HS256')

        # return success message and JWT token
        return {'message': 'Account created and login successful', 'token': token.decode('utf-8')}, 200

class CustomerData(Resource):
    def get(self, customer_id):
        # check for JWT token in header
        if 'Authorization' not in request.headers:
            return {'message': 'Authorization header missing'}, 401

        # decode JWT token and verify customer id
        token = request.headers['Authorization'].split()[1]
        try:
            data = jwt.decode(token, app.secret_key, algorithms='HS256')
            if data['customer_id'] != customer_id:
                return {'message': 'Unauthorized access'}, 401
        except:
            return {'message': 'Invalid token'}, 401

        # search the blockchain for customer information
        customer_data = blockchain.search_block(customer_id)
        if not customer_data:
            return {'message': 'Account not found'}, 404

        # return customer information
        return {'customer_data': customer_data}, 200
    
    def put(self, customer_id):
        # check for JWT token in header
        if 'Authorization' not in request.headers:
            return {'message': 'Authorization header missing'}, 401

        # decode JWT token and verify customer id
        token = request.headers['Authorization'].split()[1]
        try:
            data = jwt.decode(token, app.secret_key, algorithms='HS256')
            if data['customer_id'] != customer_id:
                return {'message': 'Unauthorized access'}, 401
        except:
            return {'message': 'Invalid token'}, 401

        # gather updated customer information from request
        updated_customer_info = request.get_json()

        # search the blockchain for customer information
        customer_data = blockchain.search_

        # search the blockchain for customer information
        customer_data = blockchain.search_block(customer_id)
        if not customer_data:
            return {'message': 'Account not found'}, 404

        # update customer information in blockchain
        blockchain.update_block(customer_id, updated_customer_info)

        # return success message
        return {'message': 'Account information updated'}, 200

class AllCustomers(Resource):
    def get(self):
        # check for JWT token in header
        if 'Authorization' not in request.headers:
            return {'message': 'Authorization header missing'}, 401

        # decode JWT token and verify customer id
        token = request.headers['Authorization'].split()[1]
        try:
            data = jwt.decode(token, app.secret_key, algorithms='HS256')
            if data['customer_id'] != 'admin':
                return {'message': 'Unauthorized access'}, 401
        except:
            return {'message': 'Invalid token'}, 401

        # return list of all customers in the blockchain
        return {'customers': blockchain.chain}, 200

class IoT(Resource):
    def post(self):
        # gather IoT device information from request
        device_info = request.get_json()

        # check for JWT token in header
        if 'Authorization' not in request.headers:
            return {'message': 'Authorization header missing'}, 401

        # decode JWT token and verify customer id
        token = request.headers['Authorization'].split()[1]
        try:
            data = jwt.decode(token, app.secret_key, algorithms='HS256')
        except:
            return {'message': 'Invalid token'}, 401

        # add IoT device information to customer data in blockchain
        customer_data = blockchain.search_block(data['customer_id'])
        if not customer_data:
            return {'message': 'Account not found'}, 404
        customer_data['devices'].append(device_info)
        blockchain.update_block(data['customer_id'], customer_data)

        # return success message
        return {'message': 'IoT device added to customer account'}, 200

# add resources to api
api.add_resource(Login, '/login')
api.add_resource(CustomerData, '/customer/<customer_id>')
api.add_resource(AllCustomers, '/customers')
api.add_resource(IoT, '/iot')

if __name__ == '__main__':
    app.run(debug=True)
