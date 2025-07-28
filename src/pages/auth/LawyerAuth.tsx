import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scale, User, Mail, Phone, IdCard, GraduationCap, Building, ArrowLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const LawyerAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Scale className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl">LegalAid</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Legal Professional Portal</h1>
          <p className="text-muted-foreground mt-2">Join our verified lawyer network</p>
        </div>

        <Tabs value={isSignUp ? "signup" : "signin"} onValueChange={(value) => setIsSignUp(value === "signup")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Join Network</TabsTrigger>
          </TabsList>

          {/* Sign In */}
          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle>Lawyer Sign In</CardTitle>
                <CardDescription>Access your professional dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Professional Email</Label>
                  <Input id="email" type="email" placeholder="lawyer@lawfirm.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="licenseNumber">License Number</Label>
                  <Input id="licenseNumber" placeholder="Your bar license number" />
                </div>
                <Link to="/dashboard/lawyer">
                  <Button className="w-full" variant="professional">
                    Access Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Multi-step Sign Up */}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Join as Legal Professional
                  <span className="text-sm font-normal text-muted-foreground">
                    Step {currentStep} of 3
                  </span>
                </CardTitle>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <CardDescription>Personal Information</CardDescription>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Professional Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="lawyer@lawfirm.com" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address</Label>
                      <Textarea id="address" placeholder="Complete business address" />
                    </div>

                    <Button onClick={nextStep} className="w-full" variant="professional">
                      Continue to Education
                    </Button>
                  </div>
                )}

                {/* Step 2: Education & Experience */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <CardDescription>Education & Professional Background</CardDescription>

                    <div className="space-y-2">
                      <Label htmlFor="lawSchool">Law School</Label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="lawSchool" placeholder="Harvard Law School" className="pl-10" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear">Graduation Year</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 50 }, (_, i) => 2024 - i).map(year => (
                              <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="11-20">11-20 years</SelectItem>
                            <SelectItem value="20+">20+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialization">Areas of Specialization</Label>
                      <Textarea id="specialization" placeholder="e.g., Corporate Law, Criminal Defense, Family Law..." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentFirm">Current Law Firm/Practice</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="currentFirm" placeholder="Firm name or Independent Practice" className="pl-10" />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button onClick={prevStep} variant="outline" className="flex-1">
                        Back
                      </Button>
                      <Button onClick={nextStep} className="flex-1" variant="professional">
                        Continue to Verification
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Verification Documents */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <CardDescription>Document Verification (Required for Platform Access)</CardDescription>

                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber">Bar License Number</Label>
                      <div className="relative">
                        <IdCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="licenseNumber" placeholder="Your state bar license number" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="barState">Licensed State/Jurisdiction</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="california">California</SelectItem>
                          <SelectItem value="newyork">New York</SelectItem>
                          <SelectItem value="texas">Texas</SelectItem>
                          <SelectItem value="florida">Florida</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Bar License Certificate</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Upload PDF or Image</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Government ID</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Upload PDF or Image</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Law Degree Certificate</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Upload your JD/LLB certificate</p>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Verification Process:</strong> Your documents will be reviewed within 2-3 business days. 
                        You'll receive an email confirmation once your professional credentials are verified.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button onClick={prevStep} variant="outline" className="flex-1">
                        Back
                      </Button>
                      <Link to="/dashboard/lawyer" className="flex-1">
                        <Button className="w-full" variant="professional">
                          Submit Application
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Not a lawyer?{" "}
            <Link to="/auth/user" className="text-primary hover:text-primary-dark font-medium">
              Sign up as User
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawyerAuth;