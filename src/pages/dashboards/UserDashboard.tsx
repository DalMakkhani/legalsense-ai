import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, MessageCircle, Users, Clock, Upload, History, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const recentDocuments = [
    { id: 1, name: "College Admission Bond.pdf", date: "2024-01-15", status: "Summarized" },
    { id: 2, name: "Rental Agreement.pdf", date: "2024-01-10", status: "Processing" },
    { id: 3, name: "Employment Contract.pdf", date: "2024-01-05", status: "Summarized" }
  ];

  const recentConversations = [
    { id: 1, topic: "College admission bond requirements", date: "2024-01-15", messages: 12 },
    { id: 2, topic: "Rental dispute resolution", date: "2024-01-10", messages: 8 },
    { id: 3, topic: "Employment contract terms", date: "2024-01-05", messages: 15 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back, John!</h1>
              <p className="text-muted-foreground">Your legal assistance dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/services/document-analyzer">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Upload Document</CardTitle>
                <CardDescription>Analyze legal documents with AI</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/services/legal-chat">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Legal Chat</CardTitle>
                <CardDescription>Get AI-powered legal guidance</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/services/find-lawyers">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Find Lawyers</CardTitle>
                <CardDescription>Connect with verified professionals</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Recent Documents
              </CardTitle>
              <CardDescription>Documents you've uploaded for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{doc.name}</h4>
                      <p className="text-xs text-muted-foreground">Uploaded on {doc.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        doc.status === 'Summarized' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-warning/10 text-warning'
                      }`}>
                        {doc.status}
                      </span>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  </div>
                ))}
                {recentDocuments.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No documents uploaded yet</p>
                    <p className="text-sm">Start by uploading your first legal document</p>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Link to="/documents">
                  <Button variant="outline" className="w-full">
                    View All Documents
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Conversations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Recent Conversations
              </CardTitle>
              <CardDescription>Your chat history with the legal assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentConversations.map((conv) => (
                  <div key={conv.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{conv.topic}</h4>
                      <p className="text-xs text-muted-foreground">
                        {conv.messages} messages • {conv.date}
                      </p>
                    </div>
                    <Button size="sm" variant="ghost">Continue</Button>
                  </div>
                ))}
                {recentConversations.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No conversations yet</p>
                    <p className="text-sm">Start a chat to get legal guidance</p>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Link to="/conversations">
                  <Button variant="outline" className="w-full">
                    View All Conversations
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Case Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Current Case Status
            </CardTitle>
            <CardDescription>Track your ongoing legal matters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="font-medium mb-2">No Active Cases</h3>
              <p className="text-sm text-muted-foreground mb-4">
                You don't have any ongoing legal matters. Start by uploading a document or chatting with our AI assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link to="/services/document-analyzer">
                  <Button variant="professional">Upload Document</Button>
                </Link>
                <Link to="/services/legal-chat">
                  <Button variant="outline">Start Chat</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;