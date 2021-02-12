const express = require("express");
const { employee } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;
const router = express.Router();
module.exports=router;

// Create and Save a new Tutorial
router.post( "/bank",(req, res) => {
      
        // Create a Tutorial
        const BankData = {
          bank_name: req.body.bank_name,
        };
      
        // Save Tutorial in the database
        db.bank.create(BankData)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
});
router.get( "/bank",(req, res) => {

  db.bank.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
});

router.get( "/bank/:id",(req, res) => {
  const id = req.params.id;
    db.bank.findByPk(id)
      .then(data => {
        res.send(data);
      })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
});


router.put( "/bank/:id",(req, res) => {
  //console.log("id:"+req.params.id);
  db.bank.update(req.body, {
    where: { bank_id: req.params.id}
  }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
});



router.delete( "/bank/:id",(req, res) => {
  //console.log("id:"+req.params.id);
  db.bank.destroy({
    where: { bank_id: req.params.id}
  }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
});



// Create and Save a new Tutorial
router.post( "/branch",(req, res) => {
      
  // Create a Tutorial
  const BranchData = {
    branch_name: req.body.branch_name,
    branch_address: req.body.branch_address,
  };

  // Save Tutorial in the database
  db.branch.create(BranchData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
});
router.get( "/branch",(req, res) => {

db.branch.findAll()
.then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
  message:
    err.message || "Some error occurred while retrieving tutorials."
});
});

});

router.get( "/branch/:id",(req, res) => {
const id = req.params.id;
db.branch.findByPk(id)
.then(data => {
  res.send(data);
})
.catch(err => {
res.status(500).send({
  message:
    err.message || "Some error occurred while retrieving tutorials."
});
});

});


router.put( "/branch/:id",(req, res) => {
//console.log("id:"+req.params.id);
db.branch.update(req.body, {
where: { branch_id: req.params.id}
}).then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
  message:
    err.message || "Some error occurred while retrieving tutorials ."
});
});

});



router.delete( "/branch/:id",(req, res) => {
//console.log("id:"+req.params.id);
db.branch.destroy({
where: { branch_id: req.params.id}
}).then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
  message:
    err.message || "Some error occurred while retrieving tutorials."
});
});

});



// Create and Save a new Tutorial
router.post( "/emp",(req, res) => {
      
  // Create a Tutorial
  const EmpData = {
    emp_name: req.body.emp_name,
    bank_id: req.body.bank_id,
    branch_id: req.body.branch_id,
    emp_email: req.body.emp_email,
    emp_address: req.body.emp_address,
    emp_photo: req.body.emp_photo,
    emp_password: req.body.emp_password,
  };

  // Save Tutorial in the database
  db.employee.create(EmpData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
});

router.get( "/emp",(req, res) => {

db.employee.findAll()
.then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
  message:
    err.message || "Some error occurred while retrieving tutorials."
});
});

});

router.get( "/emp/:id",(req, res) => {
const id = req.params.id;
db.employee.findByPk(id)
.then(data => {
  res.send(data);
})
.catch(err => {
res.status(500).send({
  message:
    err.message || "Some error occurred while retrieving tutorials."
});
});

});


router.put( "/emp/:id",(req, res) => {
//console.log("id:"+req.params.id);
db.employee.update(req.body, {
where: { emp_id: req.params.id}
}).then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
  message:
    err.message || "Some error occurred while retrieving tutorials."
});
});

});



router.delete( "/emp/:id",(req, res) => {
//console.log("id:"+req.params.id);
db.employee.destroy({
where: { emp_id: req.params.id}
}).then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
  message:
    err.message || "Some error occurred while retrieving tutorials."
});
});

});


router.get( "/list",(req, res) => {

db.employee.belongsTo(db.bank,{foreignKey:"bank_id"});
db.bank.hasMany(db.employee,{foreignKey:"bank_id"});

db.employee.belongsTo(db.branch,{foreignKey:"branch_id"});
db.branch.hasMany(db.employee,{foreignKey:"branch_id"});

  db.employee.findAll({
    include:[{
      model:db.bank,
      attributes:["bank_name"],
    },
    {
      model:db.branch,
      attributes:["branch_name"],
    }]
  })
  .then(data => {
  res.send(data);
  })
  .catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving tutorials."
  });
  });
  
  });
  

  
router.get( "/list/:id",(req, res) => {

  
db.employee.belongsTo(db.bank,{foreignKey:"bank_id"});
db.bank.hasMany(db.employee,{foreignKey:"bank_id"});

db.employee.belongsTo(db.branch,{foreignKey:"branch_id"});
db.branch.hasMany(db.employee,{foreignKey:"branch_id"});

  const id = req.params.id;
  db.employee.findOne({
    where: {emp_id:id},
  include:[{
    model:db.bank,
    attributes:["bank_name"],
  },
  {
    model:db.branch,
    attributes:["branch_name"],
  }],
  
})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving tutorials."
  });
  });
  
  });

  router.get( "/listM/:email",(req, res) => {

    console.log("email invoking");
    db.employee.belongsTo(db.bank,{foreignKey:"bank_id"});
    db.bank.hasMany(db.employee,{foreignKey:"bank_id"});
    
    db.employee.belongsTo(db.branch,{foreignKey:"branch_id"});
    db.branch.hasMany(db.employee,{foreignKey:"branch_id"});
    
      const email = req.params.email;
      db.employee.findOne({
        where: { emp_email:email },
      include:[{
        model:db.bank,
        attributes:["bank_name"],
      },
      {
        model:db.branch,
        attributes:["branch_name"],
      }],
      
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
      });
      
      });