if(Meteor.startup){
	Avatar.options = {
		gravatarDefault: 'initials' // default is 404
	};
}

if(Meteor.isClient){
	Template.registerHelper("isEmpty", function (object) {
		if(object === undefined){return false;}
    	return true;
	});
	Template.post_title.helpers({
	  custom_title: function () {
	    return this.title;
	  },
	  custom_link: function (){
	    return '/posts/' + this._id + '/' + this.slug;
	  }
	});
}

// Github API
// if(Meteor.isServer){
// 	if(Meteor.startup){
// 		console.log("Github Start: ");
// 		var github = new GitHub({
// 		    version: "3.0.0", // required
// 		    timeout: 5000     // optional
// 		});
// 		Meteor.methods({
// 			'repocontent':function(uname,repoName){
// 				var ret = "loading";
// 				github.repos.get({
// 				    user: uname,
// 				    repo: repoName
// 				}, function(err, res) {
// 					ret = res;
// 					//JSON.stringify(res)
// 				    //console.log(ret);
// 				});
// 				return ret;
// 	    	}
// 	    });
// 	}
// }
// else{
// 	Meteor.setTimeout(function(){
// 		Meteor.call("repocontent","samim23","DeepDreamAnim",function(e,r){
//       		console.log(r);
//     	});
// 	},1000);
// }

// Posts.removeField("services_headline")

Posts.addField({
  fieldName: 'body',
  fieldSchema: {
    type: String,
    label: "",
    defaultValue: "...",
    optional: true,
    public: true,
    autoform: {
      omit: true
    }
  }
});
Posts.addField({
  fieldName: 'thumbnailUrl',
  fieldSchema: {
    type: String,
    label: "Thumbnail URL",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: true
    }
  }
});
Posts.addField({
  fieldName: 'url',
  fieldSchema: {
    type: String,
    label: "URL",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: true
    }
  }
});


Posts.addField({
  fieldName: 'title',
  fieldSchema: {
    type: String,
    label: "Title (< 100char)",
    optional: true,
    public: true,
    max:100,
    editableBy: ["member", "admin"],
    autoform: {
      omit: false
    }
  }
});

Posts.addField({
  fieldName: 'services_headline',
  fieldSchema: {
    type: String,
    label: "Headline (< 100char)",
    optional: true,
    public: true,
    max:100,
    editableBy: ["member", "admin"],
    autoform: {
      omit: false
    }
  }
});

Posts.addField({
  fieldName: 'services_abstract',
  fieldSchema: {
    type: String,
    label: "Abstract (< 500char)",
    max:500,
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      	omit: false,
    	rows: 2
    }
  }
});

Posts.addField({
  fieldName: 'services_thumbnail',
  fieldSchema: {
    type: String,
    label: "Thumbnail URL",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: false
    }
  }
});

Posts.addField({
  fieldName: 'services_github_date_created',
  fieldSchema: {
    type: Date,
    label: "Github: Date",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      	omit: true
    }
  }
});

Posts.addField({
  fieldName: 'services_github_url',
  fieldSchema: {
    type: String,
    label: "GitHub: URL",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      	omit: false
    }
  }
});
Posts.addField({
  fieldName: 'services_github_abstract',
  fieldSchema: {
    type: String,
    label: "GitHub: Abstract",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: false,
      rows: 2
    }
  }
});
Posts.addField({
  fieldName: 'services_github_dependencies',
  fieldSchema: {
    type: [String],
    label: "GitHub: Dependencies",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: false
    }
  }
});

Posts.addField({
  fieldName: 'services_arxiv_url',
  fieldSchema: {
    type: String,
    label: "Arxiv: URL",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: false
    }
  }
});
Posts.addField({
  fieldName: 'services_arxiv_abstract',
  fieldSchema: {
    type: String,
    label: "Arxiv: Abstract",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: false,
      rows: 2
    }
  }
});

Posts.addField({
  fieldName: 'services_arxiv_date',
  fieldSchema: {
    type: Date,
    label: "Arxiv: Date",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: true
    }
  }
});

Posts.addField({
  fieldName: 'services_arxiv_authors',
  fieldSchema: {
    type: [String],
    label: "Arxiv: Authors",
    optional: true,
    public: true,
    max: 1000,
    editableBy: ["member", "admin"],
    autoform: {
      omit: true
    }
  }
});

Posts.addField({
  fieldName: 'services_links',
  fieldSchema: {
    type: [String],
    label: "Links",
    optional: true,
    public: true,
    editableBy: ["member", "admin"],
    autoform: {
      omit: false
    }
  }
});