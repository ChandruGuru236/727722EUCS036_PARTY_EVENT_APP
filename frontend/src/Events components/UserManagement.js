// src/components/UserManagement.js
import React from 'react';
import styled from 'styled-components';
import { Table, Button } from 'react-bootstrap';

const UserManagementContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserManagement = ({ users }) => {
  return (
    <UserManagementContainer>
      <h2>User Management</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="warning" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserManagementContainer>
  );
};

export default UserManagement;
