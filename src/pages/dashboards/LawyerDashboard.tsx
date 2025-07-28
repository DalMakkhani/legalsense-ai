import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Star, 
  TrendingUp, 
  MessageCircle, 
  Calendar, 
  DollarSign,
  Award,
  Bell,
  Settings,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const LawyerDashboard = () => {
  const stats = {
    totalCases: 156,
    activeCases: 12,
    rating: 4.8,
    totalReviews: 89,
    monthlyEarnings: 12500,
    responseTime: "2.3 hours"
  };

  const recentReviews = [
    { id: 1, client: "Sarah M.", rating: 5, comment: "Excellent guidance on contract review", date: "2024-01-15" },
    { id: 2, client: "Michael R.", rating: 4, comment: "Very helpful with employment law questions", date: "2024-01-12" },
    { id: 3, client: "Jennifer L.", rating: 5, comment: "Professional and knowledgeable", date: "2024-01-10" }
  ];

  const notifications = [
    { id: 1, type: "new_case", message: "New case inquiry from John D.", time: "5 minutes ago" },
    { id: 2, type: "review", message: "New 5-star review received", time: "2 hours ago" },
    { id: 3, type: "payment", message: "Payment received for Case #1234", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Professional Dashboard</h1>
              <p className="text-muted-foreground">Manage your legal practice efficiently</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">3</Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCases}</div>
              <p className="text-xs text-muted-foreground">
                +12 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.rating}</div>
              <p className="text-xs text-muted-foreground">
                From {stats.totalReviews} reviews
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.monthlyEarnings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.responseTime}</div>
              <p className="text-xs text-muted-foreground">
                Average response time
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Reviews */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Recent Reviews
              </CardTitle>
              <CardDescription>What clients are saying about your services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <div key={review.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-sm">{review.client}</span>
                        <div className="flex items-center">
                          {Array.from({ length: review.rating }, (_, i) => (
                            <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  View All Reviews
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </CardTitle>
              <CardDescription>Recent activity and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  View All Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics and Performance */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Performance Analytics
            </CardTitle>
            <CardDescription>Track your practice growth and client satisfaction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <TrendingUp className="h-8 w-8 text-success mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Client Growth</h3>
                <p className="text-2xl font-bold text-success">+23%</p>
                <p className="text-sm text-muted-foreground">This month</p>
              </div>
              
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Success Rate</h3>
                <p className="text-2xl font-bold text-primary">94%</p>
                <p className="text-sm text-muted-foreground">Case resolution</p>
              </div>
              
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Calendar className="h-8 w-8 text-warning mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Active Cases</h3>
                <p className="text-2xl font-bold text-warning">{stats.activeCases}</p>
                <p className="text-sm text-muted-foreground">In progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <Button variant="professional" className="h-16">
            <div className="text-center">
              <MessageCircle className="h-5 w-5 mx-auto mb-1" />
              <span className="text-sm">Respond to Inquiries</span>
            </div>
          </Button>
          
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <Calendar className="h-5 w-5 mx-auto mb-1" />
              <span className="text-sm">Schedule Consultation</span>
            </div>
          </Button>
          
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <Users className="h-5 w-5 mx-auto mb-1" />
              <span className="text-sm">Manage Profile</span>
            </div>
          </Button>
          
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <BarChart3 className="h-5 w-5 mx-auto mb-1" />
              <span className="text-sm">View Analytics</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;