import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7777/api/auth/register', formData);
  
      if (response.status === 200) {
        const token = response.data.token; 
        localStorage.setItem('authToken', token); 
        toast.success("Signup Success");
        setTimeout(() => {
          navigate('/login');
        }, 5000);
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
    }
  };
  

  return (
    <div className='h-full w-full flex justify-center items-center bg-gray-200'>
      <Card className="w-1/4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Enter your details to create your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="eg: John" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="youremail@email.com" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="text" placeholder="eg: 1234567890" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" type="text" placeholder="eg: 123 Main St" value={formData.address} onChange={handleChange} required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Create account</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Register;
